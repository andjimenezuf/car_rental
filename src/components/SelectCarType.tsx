'use client';
import { optionsFilter } from '@/functions';
import { Select } from '@mantine/core';
import { ReactNode } from 'react';

const carTypes = [
  { label: 'Any', value: 'Any' },
  { label: 'Sedan', value: 'Sedan' },
  { label: 'SUV', value: 'SUV' },
  { label: 'Sports Car', value: 'Sports Car' },
  { label: 'Van', value: 'Van' },
  { label: 'Truck', value: 'Truck' },
];

interface Props {
  label?: ReactNode;
  value?: string;
  onChange?: (value: string | null) => void;
  addAny?: boolean;
  required?: boolean;
}

export const SelectCarType = ({
  label,
  value,
  onChange,
  addAny,
  required = false,
}: Props) => {
  return (
    <Select
      width="100%"
      label={label || 'Body Type'}
      placeholder="Sedan"
      data={carTypes}
      value={value}
      onChange={onChange}
      maxDropdownHeight={280}
      required={required}
      nothingFoundMessage="Nothing found"
      filter={optionsFilter}
    />
  );
};