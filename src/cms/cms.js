import CMS from 'netlify-cms';
import ResponsiveVimeoEditorWidget from 'netlify-cms-responsive-vimeo-editor-widget';
import ResponsiveYouTubeEditorWidget from 'netlify-cms-responsive-youtube-editor-widget';

import BlogPostPreview from './preview-templates/BlogPostPreview';

CMS.registerEditorComponent(ResponsiveVimeoEditorWidget);
CMS.registerEditorComponent(ResponsiveYouTubeEditorWidget);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
