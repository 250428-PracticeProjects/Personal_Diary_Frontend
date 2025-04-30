function DiaryEntryItem({ title, content }) {
    return (
      <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }
  
  export default DiaryEntryItem;
  