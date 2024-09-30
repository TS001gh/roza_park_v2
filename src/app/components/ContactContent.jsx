"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Headset } from "lucide-react";
import { useTranslationHook } from "../../hooks/useTranslation";
// import { useTranslations } from "next-intl";

const ContactContent = () => {
  const { t } = useTranslationHook();

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl mt-28">
      <h1 className="text-3xl font-bold mb-8 animate-fade-in-down text-text-primary text-center">
        {t("Contact.title")}
      </h1>

      <div className="grid grid-cols-1 justify-center max-w-6xl mx-auto gap-8">
        <div className="animate-fade-in-right">
          <div className="mb-8 flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold mb-4 text-text-primary ">
              {t("Contact.location")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-center">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg flex-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3182.9530933997157!2d37.413195475316414!3d37.08242405174073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e51fc956f06d%3A0x2e35c41d89611524!2sroza%20park%20international!5e0!3m2!1sen!2sus!4v1726922368262!5m2!1sen!2sus"
                  width="100%"
                  height={200}
                  style={{ border: 0 }}
                  allowFullScreen="true"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                  Suter International
                </h2>
                <div className="flex items-center p-2 rounded-lg hover:bg-primary hover:text-secondary transition duration-300">
                  <MapPin className="mr-2" />
                  <span>{t("Contact.suter_address")}</span>
                </div>
                <div className="flex gap-2 justify-between">
                  <div className="flex items-center p-2 rounded-lg hover:bg-primary hover:text-secondary transition duration-300 flex-1">
                    <Headset className="mr-2" />
                    <span>{t("Contact.suter_phone1")}</span>
                  </div>
                </div>
                <div className="flex items-center p-2 rounded-lg hover:bg-primary hover:text-secondary transition duration-300">
                  <Mail className="mr-2" />
                  <span>{t("Contact.suter_email")}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-center">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg flex-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3179.212072711882!2d37.295293784699695!3d37.17143077987388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDEwJzE3LjIiTiAzN8KwMTcnMzUuMiJF!5e0!3m2!1sar!2str!4v1726925537413!5m2!1sar!2str"
                  width="100%"
                  height={200}
                  style={{ border: 0 }}
                  allowFullScreen="true"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                  Rozapark International
                </h2>
                <div className="flex items-center p-2 rounded-lg hover:bg-primary hover:text-secondary transition duration-300">
                  <MapPin className="mr-2" />
                  <span>{t("Contact.roza_address")}</span>
                </div>
                <div className="flex gap-2 justify-between">
                  <div className="flex items-center p-2 rounded-lg hover:bg-primary hover:text-secondary transition duration-300 flex-1">
                    <Headset className="mr-2" />
                    <span>{t("Contact.roza_phone1")}</span>
                  </div>
                </div>

                <div className="flex items-center p-2 rounded-lg hover:bg-primary hover:text-secondary transition duration-300">
                  <Mail className="mr-2" />
                  <span>{t("Contact.roza_email")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
