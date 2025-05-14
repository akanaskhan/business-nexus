import React from 'react'
import { FaGoogle, FaLinkedin,  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Button from '../../../components/ui/button';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"


export default function Form({ formData, setFormData, errors }) {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold tracking-wider text-blue-600 uppercase mb-8 text-center">Personal Information</h2>
      <div className="space-y-4">
        <div>
          <Label className="block text-sm text-gray-600 mb-1">Full Name</Label>
          <Input
            type="text"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>
        <div>
          <Label className="block text-sm text-gray-600 mb-1">Email</Label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-2 border rounded-lg "
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <Label className="block text-sm text-gray-600 mb-1">Password</Label>
          <Input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full p-2 border rounded-lg "
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>
        <div>
          <Label className="block text-sm text-gray-600 mb-1">Confirm Password</Label>
          <Input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className="w-full p-2 border rounded-lg "
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center sm:flex-row justify-center gap-4">
        <Button
        className='w-full flex items-center justify-center gap-2'
          onClick={() => console.log("Google")}
        >
          <FaGoogle/>
           Try Google
        </Button>
        <Button 
        className='w-full flex items-center justify-center gap-2'
        onClick={() => console.log("LinkedIn")}
          
        >
          <FaLinkedin/>
           Try LinkedIn
        </Button>
        <Button 
        className='w-full flex items-center justify-center gap-2'
        onClick={() => console.log("Email")}
          
        >
          <MdEmail size={16}/>
          Try Email
        </Button>
      </div>
    </div>
  )
}
