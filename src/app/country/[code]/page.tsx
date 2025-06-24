import { getCountries } from "@/entities/country";
import Image from "next/image";
import { Card, BackButton } from "@/shared/ui";

import { notFound } from "next/navigation";

interface Props {
  params: { code: string };
}

export default async function CountryPage({ params }: Props) {
  const countries = await getCountries();
  const { code } = await params;
  const country = countries.find((c) => c.iso_code2 === code.toUpperCase());

  if (!country) {
    notFound();
  }

  return (
    <div className="max-w-xl mx-auto p-6 mt-20">
      <Card className="p-4 space-y-4 rounded-2xl shadow-md">
        <div className="flex items-center gap-4">
          {country.flag_url ? (
            <Image
              src={`https:${country.flag_url}`}
              alt={`Флаг ${country.name_ru}`}
              width={64}
              height={48}
              className="border rounded"
            />
          ) : (
            <div className="w-16 h-12 bg-muted rounded border" />
          )}
          <h1 className="text-2xl font-bold">{country.name_ru}</h1>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>
            ISO код (2 буквы): <strong>{country.iso_code2}</strong>
          </p>
          <p>
            ISO код (3 буквы): <strong>{country.iso_code3}</strong>
          </p>
        </div>
      </Card>

      <div className="text-center mt-4">
        <BackButton />
      </div>
    </div>
  );
}
