import { request, gql } from 'graphql-request';
import { WP_API_URL } from '$env/static/private';

export interface Offer {
	offer: { id: number; type: string; cost: string; budget: string; text: string };
}

interface Data {
	posts: {
		nodes: Offer[];
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
		}
	`;

	const getPosts = async () => {
		try {
			const data = await request<Data>(WP_API_URL, query);

			const posts = data.posts.nodes;

			return posts;
		} catch (error) {
			console.error(error);
			process.exit(1);
		}
	};

	return {
		posts: getPosts()
	};
}
