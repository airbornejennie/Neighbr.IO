import {
  useGetProjectsQuery
} from "./projectSlice";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
}));

function Project() {
  const { data: projects, error, isLoading } = useGetProjectsQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !projects) {
    return <div>Error occurred while retrieving data </div>;
  }
  // const filteredProjects =
  //   projects.filter((project) =>
  //     project.title.toLowerCase().includes(searchText.toLowerCase())
  //   );
  return (
    <StyledGrid container>
      {projects.map((project) => (
        <StyledGrid item xs={12} sm={6} md={4} key={project.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <Typography variant="body1">{project.title}</Typography>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="body1">Goal: ${project.goal}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">Funded: ${project.funded}</Typography>
              </Grid>
            </Grid>
          </div>
          <Button variant="contained" size="small" sx={{ bgcolor: "grey", mx: "auto", marginTop: 1 }} onClick={() => {
            navigate(`/projects/${project.id}`);
          }}>See Project Details</Button>
        </StyledGrid>
      ))}
    </StyledGrid>
  );
};

export default Project;
