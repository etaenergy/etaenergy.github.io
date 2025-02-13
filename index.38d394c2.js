// script.js
function toggleServiceSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      section.style.display = section.style.display === 'none' ? 'block' : 'none';
  } else {
      console.error('Section not found:', sectionId);
  }
}
