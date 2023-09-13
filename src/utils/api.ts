import { request } from 'graphql-request';
import { error } from '@sveltejs/kit';
import { WP_API_TOKEN, WP_API_URL } from '$env/static/private';

interface GqlData<T, Y> {
	posts: {
		nodes: T;
	};
	page: Y;
}

interface Data<T, Y> {
	rawPosts: T;
	rawPage: Y;
}

export const getData = async <T, Y>(query: string): Promise<Data<T, Y>> => {
	try {
		const requestHeaders = {
			authorization: `Bearer ${WP_API_TOKEN}`
		};
		const data = await request<GqlData<T, Y>>(WP_API_URL, query, {}, requestHeaders);
		const rawPosts = data.posts.nodes;
		const rawPage = data.page;
		return { rawPosts, rawPage };
	} catch (err) {
		console.log(err);
		throw error(500, {
			message: 'Something went wrong'
		});
	}
};
