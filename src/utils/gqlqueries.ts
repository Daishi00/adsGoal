import { gql } from 'graphql-request';

export const GET_OFFER = gql`
	{
		posts(where: { categoryName: "oferta" }) {
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
		page(id: 76, idType: DATABASE_ID) {
			offerheaders {
				headermain
				header1
				header2
				header3
			}
		}
	}
`;

export const GET_ABOUTME = gql`
	{
		posts(where: { categoryName: "omnie" }) {
			nodes {
				about {
					id
					text
				}
			}
		}
		page(id: "54", idType: DATABASE_ID) {
			aboutheaders {
				header1
				header2
				header3
			}
		}
	}
`;

export const GET_HOME = gql`
	{
		posts(where: { categoryName: "home" }) {
			nodes {
				home {
					id
					text
					type
				}
			}
		}
		page(id: "115", idType: DATABASE_ID) {
			homeheaders {
				header1
				header2
				header3
			}
		}
	}
`;
