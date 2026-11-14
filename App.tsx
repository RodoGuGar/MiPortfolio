
import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from "react-native";

export default function App() {

  const [pantalla, setPantalla] = useState("inicio");

  const persona = {
    nombre: "Rodolfo Alejandro Guerra Garcia",
    profesion: "Software Engineer Student",
    description: "I'm a student at UTLD, studying a degree in Software Development. I'm interested in programming, technology and creating software solutions.",
    correo: "rodoaleguerragar13@gmail.com",
    ubicacion: "Mexico",
    universidad: "Universidad Tecnológica de la Laguna Durango",
    carrera: "Software development",
  };

  const redes = {
    github: "https://github.com/RodoGuGar",
    linkedin: "https://www.linkedin.com/in/rodolfo-alejandro-guerra-garcia-744a4a370/",
  };

  const curriculum = {
    pdf: "https://drive.google.com/file/d/1d5El8VCSHe-GK-Xj11UZ5tscdYmmY84J/view?usp=sharing",
  };

  const habilidades = [
    "Object Oriented Programming",
    "Frontend Development",
    "Backend Development",
    "Database Management",
    "Mobile Application Development",
    "Problem Solving",
  ];

  const tecnologias = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Native",
    "SQL",
    "Git",
    "GitHub",
    "Bootstrap",
    "Firebase",
  ];

  const proyectos = [
    {
      id: 1,
      nombre: "RodoTube",
      description: "Page that simulates video players like YouTube, including a video browsing interface.",
      tecnologias: "HTML, CSS",
    },
    {
      id: 2,
      nombre: "Tamalera App",
      description: "Real-time maps application with customizable locations and interactive map features.",
      tecnologias: "HTML, CSS, JavaScript, Google Maps API",
    },
    {
      id: 3,
      nombre: "Rodocomics",
      description: "Comic visualization website using cards and Object Oriented Programming.",
      tecnologias: "HTML, CSS, JavaScript",
    },
  ];

  const abrirEnlace = (url) => {
    if (url && url.trim() !== "") {
      Linking.openURL(url).catch(() => {});
    }
  };

  const Navegacion = () => (
    <View style={styles.navigation}>

      <TouchableOpacity
        style={[
          styles.navItem,
          pantalla === "inicio" && styles.navActive,
        ]}
        onPress={() => setPantalla("inicio")}
      >
        <Text style={[
          styles.navText,
          pantalla === "inicio" && styles.navTextActive,
        ]}>
          Start
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navItem,
          pantalla === "portafolio" && styles.navActive,
        ]}
        onPress={() => setPantalla("portafolio")}
      >
        <Text style={[
          styles.navText,
          pantalla === "portafolio" && styles.navTextActive,
        ]}>
          My portfolio
        </Text>
      </TouchableOpacity>

    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      {pantalla === "inicio" ? (

        <>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.homeContent}
          >

            <View style={styles.header}>
              <Text style={styles.headerTitle}>
                MY PORTFOLIO
              </Text>

              <Text style={styles.headerSubtitle}>
                Professional Portfolio
              </Text>
            </View>

            <View style={styles.homeProfile}>

              <Image
                source={require("./assets/foto_perfil.jpg")}
                style={styles.photo}
              />

              <Text style={styles.welcome}>
                WELCOME TO MY PORTFOLIO
              </Text>

              <Text style={styles.name}>
                {persona.nombre}
              </Text>

              <Text style={styles.profession}>
                {persona.profesion}
              </Text>

              <View style={styles.divider} />

              <Text style={styles.description}>
                {persona.description}
              </Text>

              <TouchableOpacity
                style={styles.mainButton}
                onPress={() => setPantalla("portafolio")}
              >
                <Text style={styles.mainButtonText}>
                  Know more
                </Text>
              </TouchableOpacity>

            </View>

            <View style={styles.homeInfo}>

              <Text style={styles.homeInfoTitle}>
                SOFTWARE DEVELOPMENT
              </Text>

            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                © 2026 Rodolfo Alejandro Guerra Garcia
              </Text>
            </View>

          </ScrollView>

          <Navegacion />

        </>

      ) : (

        <>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.portfolioContent}
          >

            <View style={styles.portfolioHeader}>

              <Text style={styles.portfolioHeaderTitle}>
                MY PORTFOLIO
              </Text>

              <Text style={styles.portfolioHeaderSubtitle}>
                Professional and academical info
              </Text>

              <TouchableOpacity
                style={styles.backButton}
                onPress={() => setPantalla("inicio")}
              >
                <Text style={styles.backButtonText}>
                  Go back to start
                </Text>
              </TouchableOpacity>

            </View>

            <View style={styles.section}>

              <Text style={styles.title}>
                Personal info
              </Text>

              <View style={styles.infoCard}>

                <Text style={styles.info}>
                  Name: {persona.nombre}
                </Text>

                <Text style={styles.info}>
                  Profession: {persona.profesion}
                </Text>

                <Text style={styles.info}>
                  Mail: {persona.correo}
                </Text>

                <Text style={styles.info}>
                  Location: {persona.ubicacion}
                </Text>

                <Text style={styles.info}>
                  University: {persona.universidad}
                </Text>

                <Text style={styles.info}>
                  Career: {persona.carrera}
                </Text>

              </View>

            </View>

            <View style={styles.section}>

              <Text style={styles.title}>
                Skills and knowledge
              </Text>

              <View style={styles.skillsCard}>

                {habilidades.map((habilidad, index) => (

                  <View key={index} style={styles.skillItem}>

                    <View style={styles.skillDot} />

                    <Text style={styles.skillText}>
                      {habilidad}
                    </Text>

                  </View>

                ))}

              </View>

            </View>

            <View style={styles.section}>

              <Text style={styles.title}>
                Technology and tools
              </Text>

              <View style={styles.techContainer}>

                {tecnologias.map((tecnologia, index) => (

                  <View key={index} style={styles.techBadge}>

                    <Text style={styles.techText}>
                      {tecnologia}
                    </Text>

                  </View>

                ))}

              </View>

            </View>

            <View style={styles.section}>

              <Text style={styles.title}>
                My projects
              </Text>

              {proyectos.map((proyecto) => (

                <View
                  key={proyecto.id}
                  style={styles.projectCard}
                >

                  <Text style={styles.projectNumber}>
                    PROJECT 0{proyecto.id}
                  </Text>

                  <Text style={styles.projectName}>
                    {proyecto.nombre}
                  </Text>

                  <Text style={styles.projectDescription}>
                    {proyecto.description}
                  </Text>

                  <View style={styles.projectDivider} />

                  <Text style={styles.technologies}>
                    {proyecto.tecnologias}
                  </Text>

                </View>

              ))}

            </View>

            <View style={styles.section}>

              <Text style={styles.title}>
                My Curriculum
              </Text>

              <View style={styles.curriculumCard}>

                <View style={styles.curriculumIcon}>
                  <Text style={styles.curriculumIconText}>
                    PDF
                  </Text>
                </View>

                <Text style={styles.curriculumTitle}>
                  Professional Resume
                </Text>

                <Text style={styles.curriculumDescription}>
                  Check out my academic background, technical skills, experience and professional profile.
                </Text>

                <TouchableOpacity
                  style={styles.curriculumButton}
                  onPress={() => abrirEnlace(curriculum.pdf)}
                >
                  <Text style={styles.curriculumButtonText}>
                    View Curriculum
                  </Text>
                </TouchableOpacity>

              </View>

            </View>

            <View style={styles.section}>

              <Text style={styles.title}>
                Contact and media
              </Text>

              <View style={styles.contactCard}>

                <Text style={styles.contactDescription}>
                  You can contact me through the following platforms.
                </Text>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    abrirEnlace(`mailto:${persona.correo}`)
                  }
                >
                  <Text style={styles.buttonText}>
                    Send a mail
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.socialButton}
                  onPress={() => abrirEnlace(redes.github)}
                >
                  <Text style={styles.socialButtonText}>
                    GitHub
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.socialButton}
                  onPress={() => abrirEnlace(redes.linkedin)}
                >
                  <Text style={styles.socialButtonText}>
                    LinkedIn
                  </Text>
                </TouchableOpacity>

              </View>

            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                © 2026 Rodolfo Alejandro Guerra Garcia
              </Text>

              <Text style={styles.footerSubtitle}>
                Software Development Portfolio
              </Text>
            </View>

          </ScrollView>

          <Navegacion />

        </>

      )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#5a6f84",
  },

  homeContent: {
    flexGrow: 1,
  },

  portfolioContent: {
    flexGrow: 1,
  },

  header: {
    backgroundColor: "#172D4D",
    paddingTop: 55,
    paddingBottom: 35,
    alignItems: "center",
  },

  headerTitle: {
    color: "#468269",
    fontSize: 27,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  headerSubtitle: {
    color: "#CBD5E1",
    marginTop: 7,
    fontSize: 14,
  },

  homeProfile: {
    backgroundColor: "#FFFFFF",
    margin: 18,
    marginTop: 35,
    padding: 25,
    borderRadius: 18,
    alignItems: "center",
    elevation: 5,
  },

  photo: {
    width: 125,
    height: 125,
    borderRadius: 65,
    marginBottom: 20,
  },

  welcome: {
    color: "#468269",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 12,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#172D4D",
    textAlign: "center",
  },

  profession: {
    fontSize: 16,
    color: "#2563EB",
    marginTop: 10,
  },

  divider: {
    width: 65,
    height: 3,
    backgroundColor: "#468269",
    marginVertical: 20,
    borderRadius: 5,
  },

  description: {
    color: "#475569",
    textAlign: "center",
    lineHeight: 24,
    fontSize: 15,
  },

  mainButton: {
    backgroundColor: "#172D4D",
    padding: 16,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 25,
  },

  mainButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },

  homeInfo: {
    backgroundColor: "#172D4D",
    marginHorizontal: 18,
    marginBottom: 20,
    padding: 22,
    borderRadius: 14,
    alignItems: "center",
  },

  homeInfoTitle: {
    color: "#468269",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  homeInfoText: {
    color: "#CBD5E1",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 22,
  },

  portfolioHeader: {
    backgroundColor: "#172D4D",
    paddingTop: 50,
    paddingBottom: 25,
    paddingHorizontal: 20,
  },

  portfolioHeaderTitle: {
    color: "#468269",
    fontSize: 25,
    fontWeight: "bold",
  },

  portfolioHeaderSubtitle: {
    color: "#CBD5E1",
    fontSize: 13,
    marginTop: 7,
  },

  backButton: {
    backgroundColor: "#294568",
    padding: 11,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: 20,
  },

  backButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 13,
  },

  section: {
    marginHorizontal: 15,
    marginTop: 22,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#172D4D",
    marginBottom: 15,
  },

  infoCard: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 12,
    elevation: 3,
  },

  info: {
    color: "#334155",
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 21,
  },

  skillsCard: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 12,
    elevation: 3,
  },

  skillItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  skillDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#468269",
    marginRight: 12,
  },

  skillText: {
    color: "#334155",
    fontSize: 15,
  },

  techContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  techBadge: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CBD5E1",
  },

  techText: {
    color: "#172D4D",
    fontWeight: "bold",
    fontSize: 13,
  },

  projectCard: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 12,
    marginBottom: 13,
    borderLeftWidth: 4,
    borderLeftColor: "#468269",
    elevation: 3,
  },

  projectNumber: {
    color: "#468269",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  projectName: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#172D4D",
    marginTop: 7,
  },

  projectDescription: {
    color: "#475569",
    marginTop: 9,
    lineHeight: 21,
    fontSize: 14,
  },

  projectDivider: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginTop: 15,
    marginBottom: 12,
  },

  technologies: {
    color: "#2563EB",
    fontSize: 13,
    fontWeight: "bold",
  },

  curriculumCard: {
    backgroundColor: "#FFFFFF",
    padding: 22,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
    borderTopWidth: 4,
    borderTopColor: "#468269",
  },

  curriculumIcon: {
    backgroundColor: "#172D4D",
    width: 65,
    height: 65,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  curriculumIconText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 19,
  },

  curriculumTitle: {
    color: "#172D4D",
    fontSize: 19,
    fontWeight: "bold",
  },

  curriculumDescription: {
    color: "#475569",
    textAlign: "center",
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 20,
  },

  curriculumButton: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 9,
    width: "100%",
    alignItems: "center",
  },

  curriculumButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },

  contactCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },

  contactDescription: {
    color: "#475569",
    fontSize: 14,
    marginBottom: 18,
    lineHeight: 21,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 9,
    alignItems: "center",
    marginBottom: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },

  socialButton: {
    backgroundColor: "#172D4D",
    padding: 15,
    borderRadius: 9,
    alignItems: "center",
    marginBottom: 12,
  },

  socialButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },

  navigation: {
    flexDirection: "row",
    backgroundColor: "#172D4D",
    paddingTop: 14,
    paddingBottom: 25,
    paddingHorizontal: 15,
    minHeight: 90,
    borderTopWidth: 2,
    borderTopColor: "#468269",
  },

  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },

  navActive: {
    backgroundColor: "#294568",
  },

  navText: {
    color: "#94A3B8",
    fontWeight: "bold",
    fontSize: 15,
  },

  navTextActive: {
    color: "#FFFFFF",
  },

  footer: {
    backgroundColor: "#172D4D",
    padding: 25,
    alignItems: "center",
    marginTop: 25,
  },

  footerText: {
    color: "#FFFFFF",
    fontSize: 12,
    textAlign: "center",
  },

  footerSubtitle: {
    color: "#94A3B8",
    fontSize: 11,
    marginTop: 7,
  },

});
