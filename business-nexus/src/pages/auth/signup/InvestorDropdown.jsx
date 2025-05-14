import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function InvestorDropdown({ formData, setFormData, errors }) {
    return (
        <div className="space-y-4">
            <div>
                <Label className="block text-sm text-gray-600 mb-1">
                    Investment Capital Range
                </Label>
                <Select
                    value={formData.capitalRange}
                    onValueChange={(value) => setFormData({ ...formData, capitalRange: value })}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Range" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="0-50k">$0 - $50,000</SelectItem>
                        <SelectItem value="50k-250k">$50,000 - $250,000</SelectItem>
                        <SelectItem value="250k-1m">$250,000 - $1,000,000</SelectItem>
                    </SelectContent>
                </Select>
                {errors.capitalRange && (
                    <p className="text-red-500 text-sm mt-1">{errors.capitalRange}</p>
                )}
            </div>
            <div>
                <Label className="block text-sm text-gray-600 mb-1">
                    Accreditation Status
                </Label>

                <Select
                    value={formData.accreditationStatus}
                    onValueChange={(value) => setFormData({ ...formData, accreditationStatus: value })}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="accredited">Accredited Investor</SelectItem>
                        <SelectItem value="non-accredited">Non-Accredited Investor</SelectItem>

                    </SelectContent>
                </Select>
                {errors.accreditationStatus && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.accreditationStatus}
                    </p>
                )}
            </div>
        </div>
    )
}
