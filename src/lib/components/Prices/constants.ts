import type { Price } from './types';

export const prices: Price[] = [
	{
		id: 1,
		type: 'Starter',
		cost: '1200 zł',
		budget: '*budżet do 5000 zł / miesięcznie',
		text: 'Podstawowy pakiet dla firm, które oczekują dobrej obsługi przy stosunkowo niedużym budżecie reklamowym.'
	},
	{
		id: 2,

		type: 'Standard',
		cost: '1800 zł',
		budget: '*budżet do 12 000 zł / miesięcznie',
		text: 'Pakiet dla rozwiniętych firm, które oczekują komleksowej obsługi na wysokim poziomie przy wyższym budżecie reklamowym.',
		variant: 'highlight'
	},
	{
		id: 3,
		type: 'Pro',
		cost: '2500 zł',
		budget: '*budżet do 20 000 zł / miesięcznie',
		text: 'Pakiet dedykowany dla firm, które oczekują wykorzystania najnowszych metod prowadzenia działań i najwyższej jakości obsługi.'
	}
];
