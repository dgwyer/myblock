import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import edit from './edit';
import save from './save';
import json from '../block.json';

const { name } = json;

registerBlockType( name, {
	edit,
	save,
} );
