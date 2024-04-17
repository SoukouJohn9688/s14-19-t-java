FROM maven:3.8.5-openjdk-17 AS builder
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean
RUN mvn install -DskipTests

FROM openjdk:17-alpine
WORKDIR /app
COPY --from=builder /app/target/server_ed_platform-0.1.0.jar app.jar
CMD ["java","-jar","app.jar"]