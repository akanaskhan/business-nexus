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

export default function EnterprenuerDropdown({ formData, setFormData, errors }) {
    return (
        <div className="space-y-4">
            <div>
                <Label className="block text-sm text-gray-600 mb-1">
                    Business Name
                </Label>
                <Input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) =>
                        setFormData({ ...formData, businessName: e.target.value })
                    }
                    className="w-full p-2 border rounded-lg text-sm"
                    placeholder="e.g Kulfi Khoy Wali"
                />
                {errors.businessName && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.businessName}
                    </p>
                )}
            </div>
            <div>
                <Label className="block text-sm text-gray-600 mb-1">
                    Business Stage
                </Label>

                <Select
                    value={formData.businessStage}
                    onValueChange={(value) => setFormData({ ...formData, businessStage: value })}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Stage" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="idea">Idea Stage</SelectItem>
                        <SelectItem value="mvp">MVP</SelectItem>
                        <SelectItem value="early-revenue">Early Revenue</SelectItem>
                        <SelectItem value="growth">Growth Stage</SelectItem>

                    </SelectContent>
                </Select>
                {errors.businessStage && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.businessStage}
                    </p>
                )}
            </div>
            <div>
                <Label className="block text-sm text-gray-600 mb-1">
                    Pitch Deck
                </Label>
                <Input
                    type="file"
                    onChange={(e) => handleFileUpload(e, "pitchDeck")}
                    className="w-full p-2 border rounded-lg text-sm"
                    accept=".pdf,.ppt,.pptx"
                />
            </div>
        </div>
    )
}
