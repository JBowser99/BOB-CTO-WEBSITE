import React, { useState, useEffect } from 'react';
import { db } from '../lib/firebaseConfig'; // Adjust the path if necessary
import { doc, getDoc, setDoc, onSnapshot, runTransaction } from 'firebase/firestore';
import { FaThumbsUp } from 'react-icons/fa';

const ThumbsUp: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const thumbsUpRef = doc(db, 'clicks', 'thumbsUp');

  useEffect(() => {
    const fetchCount = async () => {
      const docSnap = await getDoc(thumbsUpRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data && typeof data.count === 'number') {
          setCount(data.count);
        }
      } else {
        await setDoc(thumbsUpRef, { count: 0 });
      }
    };

    fetchCount();

    const unsubscribe = onSnapshot(thumbsUpRef, (doc) => {
      const data = doc.data();
      if (data && typeof data.count === 'number') {
        setCount(data.count);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleThumbsUp = async () => {
    try {
      await runTransaction(db, async (transaction) => {
        const docSnap = await transaction.get(thumbsUpRef);
        if (!docSnap.exists()) {
          throw new Error('Document does not exist!');
        }

        const newCount = (docSnap.data().count || 0) + 1;
        transaction.update(thumbsUpRef, { count: newCount });
      });
    } catch (e) {
      console.error("Transaction failed: ", e);
    }
  };

  return (
    <div className="thumbs-up-container">
      <button onClick={handleThumbsUp} className="thumbs-up-button">
        <FaThumbsUp size={24} />
      </button>
      <p className="text-yellow-400 font-semibold text-lg uppercase">{count} Supporters!</p>
      <style jsx>{`
        .thumbs-up-container {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .thumbs-up-button {
          background-color: gold;
          border: none;
          color: white;
          padding: 15px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
          border-radius: 12px;
        }
        .thumbs-up-button:hover {
          background-color: skyblue;
        }
      `}</style>
    </div>
  );
};

export default ThumbsUp;
