import { SITE_ROUTES } from '@/constants';
import { redirect } from 'next/navigation';

const { APP } = SITE_ROUTES;
const page = () => redirect(APP.DASHBOARD);

export default page;
