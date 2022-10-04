import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'fdt9qspl',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skMGHNcPOOqcsEuQHmmZYy1O6lYApaZgIf5Q5bXBfKQdLPqgMmHOn9iaj52V2amP4T5icTJzd73J0fMWiSaX38xqyHC5eZ4aLVZBi2fNCrWdPGIbCObwuUx2W3Lg7l6AtY9S4zekN9LLzR67DFnWydwAYwtNydu8Tdt6um8QWHCgHPEoOLu4',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);