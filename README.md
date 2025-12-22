# DevOps Sample Node.js App

## Overview

A lightweight Node.js application. It features basic web endpoints, Prometheus metrics integration, and is designed for Kubernetes deployment and CI/CD pipeline demonstrations.

## Features

- Express.js web server
- Prometheus metrics integration
- Readiness and liveness probe endpoints
- Customizable port via environment variable

## Prerequisites

- Node.js (v22.1.0)
- KinD

# <div align="center">

# sample-nodejs — DevOps / DevSecOps CI/CD + GitOps (ArgoCD)

A complete DevOps/DevSecOps challenge solution showing:

 Helm chart (Kubernetes Deployment)  
 CI with tests + Helm lint + **Semgrep SAST** + **Trivy image scanning**  
 Release pipeline with **version bump + git tags + Docker Hub push**  
 CD pipeline with **ArgoCD GitOps** deploying to a local **KinD** cluster via **self-hosted runner (WSL Ubuntu)**

</div>

---

## Challenge Coverage Checklist

### Helm Chart
- [x] Helm chart to deploy app to Kubernetes (`charts/sample-nodejs`)
- [x] Chosen resource kind: **Deployment**
- [x] Readiness & Liveness probes
- [x] Service + Ingress
- [x] Resource requests & limits
- [x] Extra configs: ConfigMap + ServiceAccount

### CI/CD Pipeline
- [x] Git workflow with `dev` + `main`
- [x] Version bumping + git tag on release
- [x] DevSecOps: **Semgrep SAST gate**
- [x] Docker image vulnerability scan: **Trivy gate**
- [x] Build + Dockerize + push image to Docker Hub
- [x] Deploy to Kubernetes using **ArgoCD + GitOps**

---

## Repository Structure

```text
.
├─ Dockerfile
├─ app.js
├─ package.json
├─ package-lock.json
├─ kind-config.yaml
├─ charts/
│  └─ sample-nodejs/
│     ├─ Chart.yaml
│     ├─ values.yaml
│     └─ templates/
│        ├─ deployment.yaml
│        ├─ service.yaml
│        ├─ ingress.yaml
│        ├─ configmap.yaml
│        └─ serviceaccount.yaml
├─ argocd/
│  └─ application.yaml


   ├─ ci.yaml
   ├─ release.yaml
   └─ cd.yaml

---

## POC evidence (Screenshots)


<img width="1919" height="972" alt="image (1)" src="https://github.com/user-attachments/assets/1ec54b9f-3c55-4875-9920-d67b2bcb1315" />


<img width="1601" height="936" alt="image" src="https://github.com/user-attachments/assets/f55d253e-c164-4c51-9d8e-63d4ee6d36eb" />








