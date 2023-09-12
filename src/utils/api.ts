import { request, gql } from 'graphql-request';
import { error } from '@sveltejs/kit';

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

export const getData = async <T, Y>(endpoint: string, query: string): Promise<Data<T, Y>> => {
	try {
		const data = await request<GqlData<T, Y>>(endpoint, query);
		const rawPosts = data.posts.nodes;
		const rawPage = data.page;
		return { rawPosts, rawPage };
	} catch (err) {
		throw error(500, {
			message: 'Something went wrong'
		});
	}
};
