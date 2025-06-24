"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { Country } from "@/entities/country/types";
import { fallbackImage } from "@/shared/lib";

export const CountryCard = ({ country }: { country: Country }) => {
  const [visible, setVisible] = useState(true);
  const [flagSrc, setFlagSrc] = useState(
    country.flag_url ? `https:${country.flag_url}` : fallbackImage
  );

  const handleRemove = () => {
    setVisible(false);
  };

  const handleImageError = () => {
    setFlagSrc(fallbackImage);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ duration: 0.5 }}
          layout
        >
          <Card className="flex items-center justify-between gap-4 p-4 rounded-xl shadow-sm max-w-md w-full">
            <div className="flex items-center gap-3 min-w-0">
              <Image
                src={flagSrc}
                alt={`Флаг ${country.name_ru}`}
                width={32}
                height={24}
                className="border rounded"
                onError={handleImageError}
              />
              <span className="text-lg truncate">{country.name_ru}</span>
            </div>
            <div className="flex gap-2">
              <Link href={`/country/${country.iso_code2}`}>
                <Button size="sm">Подробнее</Button>
              </Link>
              <Button variant="outline" size="sm" onClick={handleRemove}>
                Удалить
              </Button>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
