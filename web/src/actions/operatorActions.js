import axios from 'axios';
import { requestAuthenticated } from 'utils';
import { modifySections } from 'utils/initialize';

export const updateConfigs = async (configs) => {
	const { valid_languages, defaults, ...restConfigs } = configs;
	const versionedConfigs = await pushVersions(restConfigs);

	const constants = {
		kit: {
			valid_languages,
			defaults,
			...versionedConfigs,
		},
	};

	const options = {
		method: 'PUT',
		body: JSON.stringify(constants),
	};

	return requestAuthenticated('/admin/kit', options);
};

export const updateInjectedHTML = (injected_html) => {
	const constants = {
		kit: {
			injected_html,
		},
	};

	const options = {
		method: 'PUT',
		body: JSON.stringify(constants),
	};

	return requestAuthenticated('/admin/kit', options);
};

export const getKitData = async () => {
	const { data } = await axios.get('/kit');
	return data;
};

export const getVersions = async () => {
	const {
		data: { meta = {} },
	} = await axios.get('/kit');
	return meta.versions ? meta.versions : {};
};

export const publish = async (configs = {}) => {
	const { icons = {} } = configs;
	const { dark: { EXCHANGE_LOGO: logo_image } = {} } = icons;

	await updateConfigs({
		...configs,
		...(logo_image ? { logo_image } : {}),
	});
};

export const pushVersions = async (configs = {}) => {
	const { pinned_markets, default_sort, ...versioned_configs } = configs;
	const { sections = {}, ...rest } = versioned_configs;
	const versions = await getVersions();
	const uniqid = Date.now();
	Object.keys(versioned_configs).forEach((key) => {
		versions[key] = `${key}-${uniqid}`;
	});
	return {
		...rest,
		meta: {
			versions,
			sections: modifySections(sections),
			default_sort,
			pinned_markets,
		},
	};
};

export const upload = (formData) => {
	const options = {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
		data: formData,
		method: 'POST',
	};

	return axios('/admin/upload', options);
};
