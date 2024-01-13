import React, { useState } from 'react'
import Editor from 'ckeditor5-custom-build/build/ckeditor'
import { CKEditor } from '@ckeditor/ckeditor5-react'

export default function TextEditor() {
	const [text, setText] = useState('')

	const editorConfiguration = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'heading',
				'|',
				'bold',
				'italic',
				'link',
				'bulletedList',
				'numberedList',
				'|',
				'outdent',
				'indent',
				'|',
				// 'imageUpload',
				'blockQuote',
				'insertTable',
				'alignment',
				// 'code',
				// 'codeBlock',
				// 'findAndReplace',
				// 'fontColor',
				// 'fontFamily',
				// 'fontSize',
				// 'fontBackground',
				// 'highlight',
				// 'horizontalLine',
				// 'htmlEmbed',
				'imageInsert',
				'mediaEmbed',
			],
			language: 'en',
			image: {
				toolbar: [
					'imageTextAlternative',
					'toggleImageCaption',
					'imageStyle:inline',
					'imageStyle:block',
					'imageStyle:side',
					'imageUpload',
				],
			},
			table: {
				contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
			},
		},
	}

	return (
		<>
			<CKEditor
				editor={Editor}
				config={editorConfiguration}
				data={text}
				onChange={(event, editor) => {
					const data = editor.getData()
					setText(data)
				}}
			/>

			<div>
				<p>payload</p>

				<p>{text}</p>
			</div>
		</>
	)
}
