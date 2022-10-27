import { jsPDF } from 'jspdf';
import blogIcon from '../assets/blog-icon.png';
import { IPostDetails } from '../interfaces/posts';

const doc = new jsPDF();

doc
  .addImage(blogIcon, 'PNG', 70, 5, 40, 40)
  .setFillColor(200, 100, 100)
  .setTextColor('0.3')
  .circle(200, 0, 50, 'F')
  .triangle(0, 0, 50, 0, 0, 50, 'S')
  .triangle(165, 300, 215, 300, 215, 250, 'S');

export const generateDoc = (post: IPostDetails): void => {
  const txt = `
Title: ${post.title} \n
Description: ${post.description} \n
*** ${post.fullText} *** \n
Author: ${post.postedBy ? post.postedBy : 'anonymous'} \n
${post.likes.length} likes \n
Posted on ${post.dateCreated}`;

  doc.text(txt, 20, 70, {
    maxWidth: 170,
    lineHeightFactor: 1.5,
  });
};

export const saveDoc = (id: string): void => {
  doc.save(`${id}.pdf`);
};
