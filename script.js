function openProject(projectId) {
  const modal = document.getElementById("projectModal");
  const title = document.getElementById("projectTitle");
  const video = document.getElementById("projectVideo");
  const reportLink = document.getElementById("reportLink");
  const blendLink = document.getElementById("blendLink");

  // 🔹 Définir les informations selon le projet
  let projectData = {
    maison: {
      title: "Modélisation 3D en Blender",
      blend: "projects/TP1.blend"
    },
    logo: {
      title: "Modélisation 3D en Blender",
      video: "projects/maison.mp4",
      report: "projects/Rapport de tp1 .pdf",
      blend: "projects/tp2.blend"
    },
    robot: {
      title: "Modélisation 3D en Blender",
      video: "projects/robot.mp4",
      report: "projects/robot_rapport.pdf",
      blend: "projects/robot.blend"
    }
  };

  let data = projectData[projectId];
  if (!data) return;

  // 🔹 Afficher les informations dans la modal
  title.textContent = data.title;
  video.src = data.video;
  reportLink.href = data.report;
  blendLink.href = data.blend;

  modal.style.display = "block";
}

function closeProject() {
  const modal = document.getElementById("projectModal");
  const video = document.getElementById("projectVideo");
  modal.style.display = "none";
  video.pause();
}