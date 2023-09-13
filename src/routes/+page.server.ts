import { getData } from '../utils/api';
import { GET_HOME } from '../utils/gqlqueries';

export interface Home {
	home: { id: number; text: string; type: string };
}

export interface HomeHeaders {
	homeheaders: {
		header1: string;
		header2: string;
		header3: string;
	};
}

export async function load() {
	const { rawPosts, rawPage } = await getData<Home[], HomeHeaders>(GET_HOME);

	const posts = rawPosts.sort((a, b) => a.home.id - b.home.id);

	const page = rawPage.homeheaders;
	return {
		posts,
		page
	};
}
