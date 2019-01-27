import CMS from 'netlify-cms';
import ResponsiveVimeoEditorWidget from 'netlify-cms-responsive-vimeo-editor-widget';

import BlogPostPreview from './preview-templates/BlogPostPreview';

CMS.registerEditorComponent(ResponsiveVimeoEditorWidget);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
