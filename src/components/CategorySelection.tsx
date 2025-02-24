import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CategorySelectionProps {
  onSelect: (category: string) => void;
}

const CategorySelection: React.FC<CategorySelectionProps> = ({ onSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    onSelect(value);
  };

  return (
    <div className="my-4">
      <h2 className="text-xl font-semibold tracking-tight">Select Your Preparation Category</h2>
      <Select onValueChange={handleCategoryChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="DREAM">Dream Package</SelectItem>
          <SelectItem value="SUPER_DREAM">Super Dream Package</SelectItem>
          <SelectItem value="HIGHER_STUDIES">Higher Studies</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategorySelection;
