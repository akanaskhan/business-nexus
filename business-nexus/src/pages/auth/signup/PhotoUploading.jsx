import React from 'react'
import { FaCamera } from "react-icons/fa";
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export default function PhotoUploading({ formData, setFormData, errors, handleFileUpload }) {
    return (
        <div className="space-y-6">
            <h2 className="text-lg font-semibold tracking-wider text-blue-600 uppercase mb-8 text-center">
                Complete Your Profile
            </h2>
            <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                    {formData.profilePicture ? (
                        <img
                            src={URL.createObjectURL(formData.profilePicture)}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover"
                        />
                    ) : (
                        <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                            <FaCamera className="text-3xl text-gray-400" />
                        </div>
                    )}
                    <Input
                        type="file"
                        onChange={(e) => handleFileUpload(e, "profilePicture")}
                        className="hidden"
                        id="profile-upload"
                        accept="image/*"
                    />
                    <Label
                        htmlFor="profile-upload"
                        className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700"
                    >
                        <FaCamera />
                    </Label>
                </div>
                <div className="w-full">
                    <Label className="block text-sm text-gray-600 mb-1">
                        Professional Links
                    </Label>
                    <Input
                        type="text"
                        value={formData.professionalLinks}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                professionalLinks: e.target.value,
                            })
                        }
                        placeholder="LinkedIn, Website, etc."
                        className="w-full p-2 border rounded-lg"
                    />
                </div>
                <div className="w-full">
                    <Label className="flex items-center">
                        <Input
                            type="checkbox"
                            checked={formData.termsAccepted}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    termsAccepted: e.target.checked,
                                })
                            }
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <Label className="block text-sm text-gray-600">
                            I accept the terms and conditions
                        </Label>
                    </Label>
                    {errors.terms && (
                        <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
                    )}
                </div>
            </div>
        </div>
    )
}
