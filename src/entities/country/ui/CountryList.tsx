"use client";

import { CountryCard } from "@/entities/country/ui/CountryCard";
import type { Country } from "@/entities/country/types";

export function CountryList({ countries }: { countries: Country[] }) {
  return (
    <div className="relative h-[500px] w-full">
      <div className="absolute inset-0 flex flex-col items-center gap-2">
        {countries.map((country) => (
          <div className="w-full max-w-md" key={country.iso_code2}>
            <CountryCard country={country} />
          </div>
        ))}
      </div>
    </div>
  );
}
