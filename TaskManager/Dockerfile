FROM openjdk:17-jdk-slim



WORKDIR /app


COPY target/TaskManager-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8082

# Command to run your Spring Boot app
CMD ["java", "-jar", "app.jar"]
