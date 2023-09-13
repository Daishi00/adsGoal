import { getData } from '../../utils/api';
import { GET_ABOUTME } from '../../utils/gqlqueries';

export interface About {
	about: { id: number; text: string };
}

export interface AboutHeaders {
	aboutheaders: {
		header1: string;
		header2: string;
		header3: string;
	};
}

export async function load() {
	const { rawPosts, rawPage } = await getData<About[], AboutHeaders>(GET_ABOUTME);

	const posts = rawPosts.sort((a, b) => a.about.id - b.about.id);

	const page = rawPage.aboutheaders;
	return {
		posts,
		page
	};
}
