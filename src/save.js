import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save(props) {
	const { attributes: { frontendText, backgroundColor } } = props;

	return (
		<p { ...useBlockProps.save() } style={{ backgroundColor: backgroundColor }}>
			{frontendText}
		</p>
	);
}
