import { shallowMount } from '@vue/test-utils';
import ResidentsModalVue from './ResidentsModal.vue';

describe('ResidentsModal.vue', () => {
	it('renders the planet name in the header', () => {
		const planet = {
			name: 'Unit Test',
			diameter: 1,
			climate: 'test',
			population: 2,
			residents: [{ name: 'Frank UnitTest' }],
		};

		const wrapper = shallowMount(ResidentsModalVue, {
			props: { planet },
			global: {
				stubs: ['o-button'],
			},
		});

		expect(wrapper.find('h2').text()).toBe('Residents of Unit Test');
	});
});
