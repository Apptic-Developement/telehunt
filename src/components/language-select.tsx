'use client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function LanguageSelect() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">English</SelectItem>
          <SelectItem value="banana">Russian {'россия'}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
