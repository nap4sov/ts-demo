import { useEffect, useState } from 'react';
import { IPostDetails } from '../../interfaces/posts';
import { generateDoc, saveDoc } from '../../utils/saveToPdf';
// import { generateDoc, saveDoc } from '../../utils/saveToPdfAlt';

interface IProps {
  id: string;
  post: IPostDetails;
}

export const ExportButton: React.FC<IProps> = ({ id, post }) => {
  // const [doc, setDoc] = useState({});
  useEffect(() => {
    generateDoc(post);
    // setDoc(generateDoc(post));
  }, [post]);

  return <button onClick={() => saveDoc(id)}>Export to PDF</button>;
};
