import { shallowMount } from '@vue/test-utils';
import PlanetModalVue from './PlanetModal.vue';

describe('PlanetModal.vue', () => {
	it('renders the planet name in the header', () => {
		const planet = {
			name: 'Unit Test',
			diameter: 1,
			climate: 'test',
			population: 2,
		};

		const wrapper = shallowMount(PlanetModalVue, {
			props: { planet },
			global: {
				stubs: ['o-button'],
			},
		});

		expect(wrapper.find('h2').text()).toBe('Unit Test');
	});
});
