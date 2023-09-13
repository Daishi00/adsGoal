import { WP_API_URL } from '$env/static/private';
import { getData } from '../../utils/api';
import { GET_OFFER } from '../../utils/gqlqueries';

export interface Offer {
	offer: { id: number; type: string; cost?: string; budget?: string; text?: string };
}

export interface OfferHeaders {
	offerheaders: {
		headermain: string;
		header1: string;
		header2: string;
		header3: string;
	};
}

export async function load() {
	const { rawPosts, rawPage } = await getData<Offer[], OfferHeaders>(WP_API_URL, GET_OFFER);

	const posts = rawPosts.sort((a, b) => a.offer.id - b.offer.id);

	const page = rawPage.offerheaders;
	return {
		posts,
		page
	};
}
