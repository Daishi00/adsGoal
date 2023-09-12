import { request, gql } from 'graphql-request';
import { error } from '@sveltejs/kit';
import { WP_API_URL } from '$env/static/private';
import { getData } from '../../utils/api';

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
	const query = gql`
		{
			posts {
				nodes {
					offer {
						id
						cost
						budget
						text
						type
					}
				}
			}
			page(id: 28, idType: DATABASE_ID) {
				offerheaders {
					headermain
					header1
					header2
					header3
				}
			}
		}
	`;
	const { rawPosts, rawPage } = await getData<Offer[], OfferHeaders>(WP_API_URL, query);

	const posts = rawPosts.sort((a, b) => a.offer.id - b.offer.id);
	const page = rawPage.offerheaders;

	return {
		posts,
		page
	};
}
