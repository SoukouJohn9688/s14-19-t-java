FROM maven:latest AS builder
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests

FROM openjdk:17-alpine
COPY --from=builder /app/target/server_ed_platform-0.0.1-SNAPSHOT.jar app.jar
CMD ["java","-jar","app.jar"]