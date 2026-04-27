import { useState } from "react";
import { ticketTypeApi } from "@/api/ticketType.api";
import { showSuccess } from "@/lib/alert";

type TicketTypeForm = {
  name: string;
  description?: string;
  price: number | string;
  quantityTotal: number | string;
  privileges?: string;
  accessLevel?: "vip" | "media" | "general" | "speaker" | "staff";
  color?: string;
  capacity?: number;
};

export const useTicketType = (
  eventId: string,
  options?: { onSuccess?: () => void },
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createTicketType = async (form: TicketTypeForm) => {
    try {
      setLoading(true);
      setError(null);

      await ticketTypeApi.create({
        eventId,
        ...form,
        price: Number(form.price),
        quantityTotal: Number(form.quantityTotal),
        privileges: form.privileges
          ? form.privileges.split(",").map((p) => p.trim())
          : [],
      });
      options?.onSuccess?.();
      showSuccess("Ticket created successfully!");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create ticket type");
    } finally {
      setLoading(false);
    }
  };

  return {
    createTicketType,
    loading,
    error,
  };
};
