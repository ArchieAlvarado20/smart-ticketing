import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/api/ticket-types`;

export const ticketTypeApi = {
  create: (data: any, config?: any) => axios.post(API, data, config),

  getByEvent: (eventId: string) => axios.get(`${API}/${eventId}`),

  update: (id: string, data: any) => axios.put(`${API}/${id}`, data),

  delete: (id: string) => axios.delete(`${API}/${id}`),
};
