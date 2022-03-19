import {api} from '@utils/apiUtils';

export const creatingTicketService = (storeId: string, ticketBody: object) =>
  api.post(`api/v1/bookings/createTicket/${storeId}`, ticketBody);

export const getBookedTickets = () => api.get('api/v1/bookings/myTickets');

export const getBookedTicket = (id: string) =>
  api.get(`api/v1/bookings/myTickets/${id}`);
