# sample-nodejs Helm Chart

This chart deploys the **sample-nodejs** application to Kubernetes using a **Deployment** (not StatefulSet).

## Why Deployment (and not StatefulSet)?
This app is a stateless HTTP service:
- no stable network identity is required
- no stable storage is required
- scaling is horizontal and simple

So **Deployment** is the correct Kubernetes primitive.

---

## What gets deployed?

### Kubernetes resources
- Deployment
- ServiceAccount
- ConfigMap (basic app config example)
- Service (ClusterIP)
- Ingress 

### Health checks
The Deployment includes:
- **readinessProbe** (ensures traffic only goes to ready Pods)
- **livenessProbe** (restarts unhealthy Pods)


### Resource management
The chart supports CPU/memory:
- `resources.requests`
- `resources.limits`

---

