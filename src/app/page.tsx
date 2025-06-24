import { getCountries } from "@/entities/country";
import { CountryList } from "@/entities/country/ui";
import { ScrollToTopButton } from "@/shared/ui";

export default async function Page() {
  const countries = await getCountries();

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-2 mt-20">
      <CountryList countries={countries} />
      <ScrollToTopButton />
    </div>
  );
}
