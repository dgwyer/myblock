import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useBlockProps
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	TextControl,
	ColorPicker
} from '@wordpress/components';
import './editor.scss';

export default function edit(props) {
	const { attributes: { editorText, frontendText, backgroundColor }, setAttributes } = props;

	return (
		<>
			<p {...useBlockProps()} style={{ backgroundColor: backgroundColor }}>
				{editorText}
			</p>
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<TextControl
							label="Editor Text"
							autoComplete="off"
							value={editorText}
							onChange={(newText) => setAttributes({ editorText: newText })}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Frontend Text"
							autoComplete="off"
							value={frontendText}
							onChange={(newText) => setAttributes({ frontendText: newText })}
						/>
					</PanelRow>
					<PanelRow>
						<ColorPicker
							color={backgroundColor}
							onChangeComplete={(value) => setAttributes({ backgroundColor: value.hex })}
							disableAlpha
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
