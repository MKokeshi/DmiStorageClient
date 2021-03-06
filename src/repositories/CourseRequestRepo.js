import Repository from "@/repositories/Repository"

const resource = "api/courses/requests"

export default {

    get: (token) => {
        let headers = {
            headers: {'Authorization': `Bearer ${token}`},
        }
        return Repository.get(resource, headers)
    }, 

    show: (token, id) => {
        let headers = {
            headers: {'Authorization': `Bearer ${token}`},
        }
        return Repository.get(resource + "/" + id, headers)
    }, 

    store: (token, data) => {
        let form = {
            course_id: data.courseId, 
            notes: data.notes, 
            lifespan: data.lifespan
        }
        let headers = {
            headers: {'Authorization': `Bearer ${token}`},
        }
        return Repository.post(resource, form, headers)
    }, 

    delete: (token, id) => {
        let headers = {
            headers: {'Authorization': `Bearer ${token}`},
        }
        return Repository.delete(resource + "/" + id, headers)
    }, 

    manage: (token, id, choice) => {
        let form = {
            choice: choice
        }
        let headers = {
            headers: {'Authorization': `Bearer ${token}`},
        }
        return Repository.put(resource + "/" + id + "/manage", form, headers)
    }

}

