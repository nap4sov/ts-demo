import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { IPostDetails } from '../interfaces/posts';
import blogIcon from '../assets/blog-icon.png';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

export const generateDoc = (post: IPostDetails) => ({
  content: [
    { image: blogIcon, width: 100, height: 100 },
    { text: 'Title: ', style: 'heading' },
    { text: post.title, style: 'text' },
    { text: 'Full text: ', style: 'heading' },
    { text: post.fullText, style: 'text' },
  ],
  styles: {
    heading: {
      fontSize: 20,
      bold: true,
    },
    text: {
      fontSize: 16,
      italics: true,
    },
  },
});

export const saveDoc = (doc: any) => {
  pdfMake.createPdf(doc).download();
};
