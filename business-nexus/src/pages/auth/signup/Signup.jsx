import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Roles from "./Roles";
import Form from "./Form";
import InvestorDropdown from "./InvestorDropdown";
import EnterprenuerDropdown from "./EnterprenuerDropdown";
import PhotoUploading from "./PhotoUploading";
import Button from "../../../components/ui/button";
import { X } from "lucide-react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Toast = ({ message, type, onClose }) => {
  const backgroundColors = {
    success: "bg-white",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-yellow-500",
  };

  return (
    <div
      className={`fixed top-[1%] left-auto md:top-4 md:right-4 z-50 max-w-xs sm:max-w-sm lg:max-w-md p-4 text-black rounded-md shadow-lg ${
        backgroundColors[type] || "bg-gray-200"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-2">
          <IoIosCheckmarkCircleOutline
            size={24}
            className="mt-1 text-green-500"
          />
          <div className="flex flex-col">
            <span className="text-base font-medium">{message}</span>
            <span className="text-sm text-gray-500 leading-5">
              Now you can login to access your dashboard.
            </span>
          </div>
        </div>
        <X
          className="text-gray-500 cursor-pointer hover:text-gray-800"
          onClick={onClose}
          size={20}
        />
      </div>
    </div>
  );
};

export default function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    investmentPreferences: "",
    capitalRange: "",
    areasOfInterest: [],
    expertise: "",
    accreditationStatus: "",
    businessName: "",
    businessStage: "",
    industrySector: "",
    fundingRequirements: "",
    businessDescription: "",
    pitchDeck: null,
    profilePicture: null,
    professionalLinks: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateStep = () => {
    const newErrors = {};

    if (step === 1 && !role) {
      newErrors.role = "Please select a role";
    }

    if (step === 2) {
      if (!formData.fullName?.trim())
        newErrors.fullName = "Full name is required";
      if (!formData.email?.trim()) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
      if (!formData.password) newErrors.password = "Password is required";
      else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    if (step === 3) {
      if (role === "investor") {
        if (!formData.capitalRange)
          newErrors.capitalRange = "Capital range is required";
        if (!formData.accreditationStatus) {
          newErrors.accreditationStatus = "Accreditation status is required";
        }
      } else {
        if (!formData.businessName?.trim()) {
          newErrors.businessName = "Business name is required";
        }
        if (!formData.businessStage) {
          newErrors.businessStage = "Business stage is required";
        }
      }
    }

    if (step === 4 && !formData.termsAccepted) {
      newErrors.terms = "Please accept terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleFileUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setErrors({ ...errors, [field]: "File size should be less than 2MB" });
        return;
      }
      setFormData({ ...formData, [field]: file });
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => resolve(null);
    });
  };

  const getStoredData = (key) => {
    try {
      const data = localStorage.getItem(key);
      if (!data) return [];

      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error(`Error parsing ${key}:`, error);
      return [];
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateStep()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Convert files to Base64
      const [profilePicture, pitchDeck] = await Promise.all([
        formData.profilePicture
          ? convertFileToBase64(formData.profilePicture)
          : null,
        formData.pitchDeck ? convertFileToBase64(formData.pitchDeck) : null,
      ]);

      const userData = {
        ...formData,
        role,
        id: `user_${Date.now()}`,
        profilePicture,
        pitchDeck,
        createdAt: new Date().toISOString(),
        password: undefined,
        confirmPassword: undefined,
      };

      // Get existing data safely
      const existingUsers = getStoredData("users");
      const existingCredentials = getStoredData("userCredentials");

      // Check for duplicate email
      if (existingUsers.some((user) => user.email === formData.email)) {
        showToast("This email is already registered", "error");
        setIsSubmitting(false);
        return;
      }

      // Update storage
      localStorage.setItem(
        "users",
        JSON.stringify([...existingUsers, userData])
      );
      localStorage.setItem(
        "userCredentials",
        JSON.stringify([
          ...existingCredentials,
          {
            email: formData.email,
            password: formData.password,
            userId: userData.id,
          },
        ])
      );

      showToast("Registration successful! Redirecting...", "success");
      setTimeout(() => navigate("/login", { replace: true }), 2000);
    } catch (error) {
      console.error("Registration error:", error);
      showToast("Registration failed. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-full bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="h-full w-full sm:w-[75vw] lg:w-[45vw] mx-auto">
          <ProgressBar step={step} />

          <div className="bg-white rounded-lg shadow-xl p-8 dark:bg-gray-800">
            {step === 1 && (
              <Roles role={role} setRole={setRole} errors={errors} />
            )}

            {step === 2 && (
              <Form
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold tracking-wider text-blue-600 uppercase mb-8 text-center">
                  {role === "investor"
                    ? "Investment Details"
                    : "Business Details"}
                </h2>
                {role === "investor" ? (
                  <InvestorDropdown
                    formData={formData}
                    setFormData={setFormData}
                    errors={errors}
                  />
                ) : (
                  <EnterprenuerDropdown
                    formData={formData}
                    setFormData={setFormData}
                    errors={errors}
                  />
                )}
              </div>
            )}

            {step === 4 && (
              <PhotoUploading
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                handleFileUpload={handleFileUpload}
              />
            )}

            <div className="flex justify-between mt-8 gap-4">
              {step > 1 && (
                <Button
                  onClick={handleBack}
                  className="w-full md:w-24"
                  disabled={isSubmitting}
                >
                  Back
                </Button>
              )}
              <Button
                onClick={step === 4 ? handleSubmit : handleNext}
                className="w-full md:w-24 ml-auto"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Processing..."
                  : step === 4
                  ? "Submit"
                  : "Next"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
