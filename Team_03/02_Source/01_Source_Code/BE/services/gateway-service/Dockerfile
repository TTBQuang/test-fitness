FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/gateway-service-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8088

ENTRYPOINT ["java", "-jar", "app.jar"]
