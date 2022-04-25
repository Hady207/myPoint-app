import {api} from '@utils/apiUtils';

export const creatingTicketService = (storeId: string, ticketBody: object) =>
  api.post(`api/v1/bookings/createTicket/${storeId}`, ticketBody);

export const scanTicketService = (scanBody: object) =>
  api.post('api/v1/bookings/scan', scanBody);

export const getBookedTickets = () => api.get('api/v1/bookings/myTickets');

export const getBookedTicket = (id: string) =>
  api.get(`api/v1/bookings/myTickets/${id}`);

export const getYearlyData = (id: string) =>
  api.get(`api/v1/bookings/${id}/yearly`);

export const getHourlyData = (id: string) =>
  api.get(`api/v1/bookings/${id}/hourly`);

export const getScanRatioData = (id: string) =>
  api.get(`api/v1/bookings/${id}/scan/ratio`);
