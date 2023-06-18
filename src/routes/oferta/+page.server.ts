import { request, gql } from 'graphql-request';
import { error } from '@sveltejs/kit';
import { WP_API_URL } from '$env/static/private';

export interface Offer {
	offer: { id: number; type: string; cost?: string; budget?: string; text?: string };
}

export interface OfferHeaders {
	headermain: string;
	header1: string;
	header2: string;
	header3: string;
}

interface DataGql {
	posts: {
		nodes: Offer[];
	};
	page: {
		offerheaders: OfferHeaders;
	};
}

interface Data {
	posts: Offer[];
	page: OfferHeaders;
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

	const getPosts = async (): Promise<Data> => {
		try {
			const data = await request<DataGql>(WP_API_URL, query);

			const rawPosts = data.posts.nodes;
			const posts = rawPosts.sort((a, b) => a.offer.id - b.offer.id);

			const page = data.page.offerheaders;

			console.log(posts);

			return { posts, page };
		} catch (err) {
			throw error(500, {
				message: 'Something went wrong'
			});
		}
	};

	const { posts, page } = await getPosts();

	return {
		posts,
		page
	};
}
